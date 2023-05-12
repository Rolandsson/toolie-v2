import GroupiePage from "../pages/groupie/GroupiePage";


const routes = [
  {
    path: "/home",
    element: (<div>Home page</div>)
  },
  {
    path: "/groupie",
    element: <GroupiePage />
  },
  {
    path: '/toolie',
    element: (<div>Toolie page</div>)
  },
  {
    path: '/selfie',
    element: (<div>Selfie page</div>)
  },
  {
    path: '/helpie',
    element: (<div>Helpie page</div>)
  },
]

export default routes;