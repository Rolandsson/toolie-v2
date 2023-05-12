import cacheService from "../service/cacheService"

export function useLocalMemory<Type>(ref: string) {
  
  const get = (): Type => cacheService.get(ref);
  const put = (data: Type) => cacheService.save(ref, data);

  return {get, put}
}

