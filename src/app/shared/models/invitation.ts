export interface InvitationData {
    couple: {
        bride: string;
        groom: string;
        displayNames?: string;
        monogram?: string;
    };

    event: {
        dateISO: string;
        city: string;
    };

    hero: {
        quote: string;
        coverImageUrl: string;
    };

    music?: {
        title?: string;
        audioUrl: string;
    };

    blessing?: {
        playLabel?: string;
        text: string;
    };

    parents?: {
        intro: string;
        brideParentsTitle?: string;
        groomParentsTitle?: string;
        brideParents: string[];
        groomParents: string[];
    };

    locations: {
        ceremony: LocationInfo;
        party: LocationInfo;
    };

    timeline: Array<{
        time: string;
        title: string;
        subtitle?: string;
        icon?: "rings" | "church" | "party" | "photo" | "food";
    }>;

    rsvp: {
        groomWhatsappNumber: string;
        brideWhatsappNumber: string;
        messageTemplate: string;
        note?: string;
    };
    dressCode: {
        title: string;
        note?: string;
    };

    gallery: {
        images: string[];
    };
}

export interface LocationInfo {
    name: string;
    address: string;
    mapsUrl: string;
}