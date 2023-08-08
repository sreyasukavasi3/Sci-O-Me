import {saveAs} from 'file-saver';

export function saveData(data) {
	const blob = new Blob([data], {type: "text/plain;charset=utf-8"});
	saveAs(blob, "HelloWorld.csv")
}
