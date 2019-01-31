// export type FloorModel = Array<{type: string; features: Features}>;

export interface FloorModel {
    type: string;
    geometry: Geometry;
    properties: Properties;
    id: string;
}

export interface Geometry {
    type: string;
    coordinates: any;
}

export interface Properties {
    name: string;
    price: string;
    numOfApartaments: string;
    roomsInfo: any;
}
