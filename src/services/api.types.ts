export interface ImageData {
    id: string;
    urls: {
      small: string;
      regular: string;
    };
    alt_description: string;
  }
 export interface ImagePromise {
    results: ImageData[];
  }