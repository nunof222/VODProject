export interface Movie { 
    id: string;
    title: string;
    synopsis: string;
    director: string;
    cast: [ "Elijah Wood", "Ian McKellen", "Orlando Bloom" ];
    category: string;
    poster: string;
    streamURL: string;
    rate: [1,2,3,4,5];


}