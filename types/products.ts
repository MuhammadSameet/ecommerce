import { StaticImport } from "next/dist/shared/lib/get-img-props";

export interface Products {
    id: any | null | undefined;
    inventory: number;
    imageUrl: string | StaticImport;
    category: any;
    _id : string;
    name : string;
    description : string;
    _type: "product";
    image?: {
        assets : {
            _ref : string;
            _type : "image"
        }
    };

    price : number;
    slug : {
        _type : "slug"
        current : string
    };
    quantity : number;
    createdAt:string;

}
