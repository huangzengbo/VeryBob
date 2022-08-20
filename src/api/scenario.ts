export const getData = async () => {
    // TODO: inteceptor, maybe use axios??
    const response = await fetch("https://my-json-server.typicode.com/huangzengbo/VeryBob/scenarios");
    const data = await response.json();
    return data;
}