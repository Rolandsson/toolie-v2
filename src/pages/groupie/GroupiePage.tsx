import { useEffect, useState } from "react"
import FieldComponent from "../../components/Simple/FieldComponent";
import ListComponent from "../../components/Simple/ListComponent";
import { featuredChoices } from "./GroupFeaturedChoices";
import { useLocalMemory } from "../../hook/localMemory";
import { Group } from "../../model/Group";
import { createGroups, createNamedGroups } from "../../util/groupUtil";


const initialFormState = {
  randomGroupName: false,
  randomLeader: false,
  membersPerGroup: '',
  amountOfGroups: ''
}
const initialNamesState: Array<string> = [];
const initialGroupsState: Array<Group> = [];

const GroupiePage = () => {
  const currentNames = useLocalMemory<Array<string>>("current-names");
  /* page specific states */
  const [names, setNames] = useState(initialNamesState);
  const [groups, setGroups] = useState(initialGroupsState)
  const [formState, setFormState] = useState(initialFormState);

  const handleFormChange = ({name, value, checked}: HTMLInputElement) => {
    setFormState({...formState, [name]: value !== '' ? value : checked});
  }


  const handleFormSubmit = () => {
    let members = Number.parseInt(formState.membersPerGroup);
    if(formState.randomGroupName) {
      setGroups(createNamedGroups(names, members));
    } else {
      setGroups(createGroups(names, members));
    }
  }

  const handleNameAdded = (value: string) => {
    const newNames = [...names, value];
    setNames(newNames);
    currentNames.put(newNames)
  }

  /* page specific constants */
  featuredChoices.nextName.onSubmit = handleNameAdded;
  featuredChoices.submitChoice.onClick = handleFormSubmit;


  /* page hook effects */
  useEffect(() => setNames(currentNames.get() || []), []);

  /* page render */
  return (
    <>
      <ListComponent items={names} title="Let's create some kickass groups"/>

      {
        Object.entries(featuredChoices).map(([name, choice]) => 
          <FieldComponent {...choice} name={name} key={name} onChange={handleFormChange} />
        )
      }

      {
        groups.map(group => <ListComponent items={group.split} title={group.name} key={crypto.randomUUID()}/>)
      }
    </>
  )
}

export default GroupiePage;