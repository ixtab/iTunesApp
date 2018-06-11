export class Cancion {
    trackId: number;
    trackName: string;
    artistName: string;
    artworkUrl100: string;
    previewUrl: string;
    trackPrice: number;
    currency: string;

    constructor (trackId : number, trackName: string,
                artistName: string, artworkUrl100: string, 
                previewUrl: string, trackPrice: number, currency: string)
    {
        this.trackId = trackId;
        this.trackName = trackName;
        this.artistName = artistName;
        this.artworkUrl100 = artworkUrl100;
        this.previewUrl = previewUrl;
        this.trackPrice = trackPrice;
        this.currency = currency;
    }
}