// export type FloorModel = Array<{type: string; features: Features}>;

export interface FloorModel {
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
    numOfApartaments: string;
    complexId: string;
    buildingId: string;
    floorOrder: string;
    constructionStatus: string;
    layoutImgUrl: string;
    imageWidth: string;
    imageHeight: string;
    updatedAt: string;
    createdBy: string;
    price: string;
    flats: any;
}
