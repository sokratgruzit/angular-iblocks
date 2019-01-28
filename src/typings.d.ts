/* SystemJS module definition */
declare var module: NodeModule;
declare var jquery: any;

interface NodeModule {
	id: string;
}

interface JQuery {
	maphilight(options?: any): any;
//	jquery-ui(options?: any): any;
}
