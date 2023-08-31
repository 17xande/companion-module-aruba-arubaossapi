import { ArubaOssInstance } from "./main";

export async function UpdateVariableDefinitions(instance: ArubaOssInstance) {
	instance.setVariableDefinitions([
		{ variableId: 'variable1', name: 'My first variable' },
		{ variableId: 'variable2', name: 'My second variable' },
		{ variableId: 'variable3', name: 'Another variable' },
	])
}
