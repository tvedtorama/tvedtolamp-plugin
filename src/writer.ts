import {default as Axios} from "axios"

export const write = (value: number) => 
	Axios.get(`http://192.168.68.251/analog/6/${value % 255}`)
