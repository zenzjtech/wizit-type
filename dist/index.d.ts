export declare enum Site {
    zillow = "zillow.com",
    realtor = "realtor.com"
}
export declare const enum MatchType {
    text = "text"
}
export declare const enum MatchLocation {
    originalSite = 0,
    detailedSite = 1
}
export declare type MySelector = {
    selector: string;
    matchType: MatchType;
    matchContent: string;
    matchLocation?: MatchLocation;
} | string;
export declare type MyXpath = {
    xpathExpression: string;
    contextNodeSelector?: string;
    matchContent?: string | string[];
};
export declare type SelectorOrXpath = MySelector | MySelector[] | undefined | MyXpath | (MySelector | MyXpath)[];
export declare const houseDetailAttributes: readonly ["price", "bedrooms", "bathrooms", "sqft", "address", "number", "street", "city", "state", "zip", "timeListed", "yearBuilt", "pricePerSqft", "hoaFees", "propertyTaxes", "mlsNumber", "imageUrl", "url", "updatedAt", "houseId", "site", "groupName"];
export declare const houseDetailFormatMapping: {
    readonly price: "Price";
    readonly bedrooms: "Bedrooms";
    readonly bathrooms: "Bathrooms";
    readonly sqft: "SQFT";
    readonly address: "Address";
    readonly number: "(Address)Number";
    readonly street: "(Address)Street Name";
    readonly city: "City";
    readonly state: "State";
    readonly zip: "Zip";
    readonly timeListed: "Time Listed";
    readonly yearBuilt: "Year Built";
    readonly pricePerSqft: "Price Per SQFT";
    readonly hoaFees: "HOA Fees";
    readonly propertyTaxes: "Property Taxes";
    readonly mlsNumber: "MLS Number";
    readonly imageUrl: "Image URL";
    readonly url: "Property Link";
    readonly updatedAt: "Updated At";
    readonly houseId: "House ID";
    readonly site: "Site";
    readonly groupName: "Group Name";
};
export declare type HouseDetailsAttributes = (typeof houseDetailAttributes)[number];
export declare type HouseDetailsValues = {
    [key in HouseDetailsAttributes]: string;
};
export declare type HouseDetailsValuesExport = {
    [key in HouseDetailsAttributes as typeof houseDetailFormatMapping[key]]?: string;
};
declare type BuyUrls = {
    inc: string[];
    exl: string[];
};
export interface SiteConfig {
    buyUrls: BuyUrls;
    forSaleText: string;
}
export declare enum SwitcherContainerType {
    parent = 0,
    sibling = 1
}
export declare type SwitcherContainer = {
    shouldInsertAtRootHouseCardElm: boolean;
    selector: string;
    type: SwitcherContainerType;
};
export interface CssSelector {
    houseCardElement: string[];
    houseDetailLinkElement: string[];
    switcherContainerElm: SwitcherContainer[];
    boardContainerElm: string;
    houseDetailPage: {
        container: string[];
        identityText: SelectorOrXpath;
    };
    houseDetail: {
        [key in HouseDetailsAttributes]?: SelectorOrXpath;
    };
}
export declare type Group = {
    id: number;
    groupIndex?: number;
    updatedAt: number;
    name: string;
    houseId: string[];
};
export declare type Agent = {
    id: number;
    name: string;
    email: string;
};
export declare enum DialogAction {
    empty = "",
    confirmAddToGroup = "confirmAddToGroup",
    confirmSendEmail = "confirmSendEmail",
    confirmDelete = "confirmDelete",
    confirmDownload = "confirmDownload",
    email = "send listing(s)",
    download = "download listing(s)",
    delete = "delete listing(s)",
    addToGroup = "add listing(s) to a group",
    AddToGroup_DuplicatedWarning = "add to group - duplicated warning",
    compareListing = "compare listing(s)",
    groupConfirmed = "groupConfirmed",
    groupEmail = "send group(s)",
    groupEmailWarning = "send email warning",
    groupDownload = "download group(s)",
    groupDelete = "delete group(s)",
    groupAddNewGroup = "add a new group",
    groupConfirmSendEmail = "groupConfirmSendEmail",
    groupConfirmAddNewGroup = "groupConfirmAddNewGroup",
    groupConfirmDownload = "groupConfirmDownload",
    groupConfirmDelete = "groupConfirmDelete",
    groupEditGroup = "edit this group",
    groupConfirmEditSingleGroup = "groupConfirmEditSingleGroup",
    groupDetailDeleteGroup = "delete this group",
    groupDetailConfirmDeleteListing = "confirm delete this group in group detail",
    groupDetailConfirmDownloadListing = "confirm download listing in group detail"
}
export declare enum NavTab {
    listing = "Listing(s)",
    group = "Group(s)",
    account = "Account",
    settings = "Settings",
    groupDetail = "GroupDetail",
    compareListing = "CompareListings",
    filters = "Filters"
}
export declare enum OnboardingState {
    extensionIntro = 0,
    listingTab = 1,
    groupTab = 2,
    accountTab = 3,
    settingsTab = 4,
    temporaryClose = 5,
    done = 6
}
export declare type IconAction = [
    string,
    DialogAction
];
export declare type FilterState = {
    price: number[];
    bedrooms: number[];
    sqft: number[];
};
export declare enum SettingsMode {
    default = 0,
    editAgent = 1,
    addNewAgent = 2
}
export declare enum TriggerClickedSource {
    addStuff = 0
}
export declare type TriggerClickedPayload = {
    source?: TriggerClickedSource;
};
export declare const DIALOG_ACTION_TO_TEXT: {
    [key in DialogAction]?: string;
};
export declare type eMessagePayload = {
    name: 'pageview';
    page_title?: string;
    page_location?: string;
};
export declare type eMessage = {
    action: string;
    payload: eMessagePayload;
};
export declare enum LocationType {
    mainPage = 0,
    detailedPage = 1
}
export declare type SwitchState = {
    [key in LocationType]: boolean;
};
export declare enum MessageResult {
    Success = 0,
    Error = 1
}
export declare type eResponse = {
    payload?: any;
    message: MessageResult;
};
export declare enum EmailDeliveryStatus {
    delivered = "delivered",
    dropped = "dropped",
    bounced = "bounced",
    deferred = "deferred",
    processed = "processed"
}
export declare type EmailDeliveryResult = {
    email: string;
    event: EmailDeliveryStatus;
};
export {};
//# sourceMappingURL=index.d.ts.map