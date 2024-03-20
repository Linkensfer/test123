export interface DataTypes {
    flight_number: number
    links: {
        mission_patch_small: string
    }
    mission_name: string
    details: string
    launch_date_local: string
    launch_site: {
        site_name: string
    }
    rocket: {
        rocket_name: string
    }
}
