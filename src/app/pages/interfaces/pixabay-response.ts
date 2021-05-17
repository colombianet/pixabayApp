export interface PixabayResponse {
    total:     number;
    totalHits: number;
    hits:      Hit[];
}

export interface Hit {
    id:              number;
    pageURL:         string;
    type:            Type;
    tags:            string;
    previewURL:      string;
    previewWidth:    number;
    previewHeight:   number;
    webformatURL:    string;
    webformatWidth:  number;
    webformatHeight: number;
    largeImageURL:   string;
    imageWidth:      number;
    imageHeight:     number;
    imageSize:       number;
    views:           number;
    downloads:       number;
    favorites:       number;
    likes:           number;
    comments:        number;
    user_id:         number;
    user:            string;
    userImageURL:    string;
}

export enum Type {
    Illustration = "illustration",
    Photo = "photo",
}
