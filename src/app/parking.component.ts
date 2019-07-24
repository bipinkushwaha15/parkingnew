export class Parking {
    public parking_id: string;
    public parking_name: string;
    public parking_address: string;
    public parking_area: string;
    public parking_locality: string;
    public parking_city: string;
    public parking_state: string;
    public parking_country: string;
    public parking_pin: number;

    constructor(
        id: string,
        name: string,
        address: string,
        area: string,
        locality: string,
        city: string,
        state: string,
        country: string,
        pin: number) {
        this.parking_id = id;
        this.parking_name = name;
        this.parking_address = address;
        this.parking_area = area;
        this.parking_locality = locality;
        this.parking_city = city;
        this.parking_state = state;
        this.parking_country = country;
        this.parking_pin = pin;
    }
}