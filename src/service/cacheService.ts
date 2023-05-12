const save = <T>(ref: string, data: T, format = "json", state = "local") => {
  if (format == "json") return saveJson(ref, data, state);
}

const get = <T>(ref: string, format = "json", state = "local"): T => {
  if (format == "json") return getJson(ref, state) as T;

  return {} as T;
}

const saveJson = (ref: string, data: any, state: string) => {
  data = JSON.stringify(data);
  if(state == "local") {
    localStorage.setItem(ref, data);
  } else {
    sessionStorage.setItem(ref, data);
  }
}

const getJson = (ref: string, state: string): any => {
  const data = state == "local" ? localStorage.getItem(ref) : sessionStorage.getItem(ref);
  return data == null ? undefined : JSON.parse(data);
}

export default { save, get };
