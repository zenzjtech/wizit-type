export enum Site {
    zillow = 'zillow.com',
    realtor = 'realtor.com'
}

export const enum MatchType {
    text = 'text'
}

export const enum MatchLocation {
    originalSite,
    detailedSite
}

export type MySelector = {
    selector: string,
    matchType: MatchType,
    matchContent: string,
    matchLocation?: MatchLocation
} | string

export type MyXpath = {
    xpathExpression: string,
    contextNodeSelector?: string,
    matchContent?: string | string[]
}
export type SelectorOrXpath = MySelector | MySelector[] | undefined | MyXpath | (MySelector | MyXpath)[]

export const houseDetailAttributes = [
    'price', 'bedrooms', 'bathrooms', 'sqft', 'address', 'number', 'street', 'city',
    'state', 'zip', 'timeListed', 'yearBuilt', 'pricePerSqft',
    'hoaFees', 'propertyTaxes', 'mlsNumber', 'imageUrl', 'url', 'updatedAt', 'houseId', 'site', 'groupName'
] as const

export const houseDetailFormatMapping = {
    'price': 'Price',
    'bedrooms': 'Bedrooms',
    'bathrooms': 'Bathrooms',
    'sqft': 'SQFT',
    'address': 'Address',
    'number': '(Address)Number',
    'street': '(Address)Street Name',
    'city': 'City',
    'state': 'State',
    'zip': 'Zip',
    'timeListed': 'Time Listed',
    'yearBuilt': 'Year Built',
    'pricePerSqft': 'Price Per SQFT',
    'hoaFees': 'HOA Fees',
    'propertyTaxes': 'Property Taxes',
    'mlsNumber': 'MLS Number',
    'imageUrl': 'Image URL',
    'url': 'Property Link',
    'updatedAt': 'Updated At',
    'houseId': 'House ID',
    'site': 'Site',
    'groupName': 'Group Name'
} as const

export type HouseDetailsAttributes = (typeof houseDetailAttributes)[number]
export type HouseDetailsValues = { [key in HouseDetailsAttributes]: string }
export type HouseDetailsValuesExport = { [key in HouseDetailsAttributes as typeof houseDetailFormatMapping[key]]?: string }

type BuyUrls = {
    inc: string[],
    exl: string[]
}
export interface SiteConfig {
    buyUrls: BuyUrls,
    forSaleText: string
}

export enum SwitcherContainerType {
    parent,
    sibling,
}
export type SwitcherContainer = {
    selector: string,
    type: SwitcherContainerType
}
export interface CssSelector {
    houseCardElement: string[],
    houseDetailLinkElement: string[],
    // Element to insert switcher as child element
    switcherContainerElm:  SwitcherContainer[],
    // Element to insert board as child element
    boardContainerElm: string,
    houseDetailPage: {
        container: string[],
        identityText: SelectorOrXpath
    },
    houseDetail: {
        [key in HouseDetailsAttributes]?: SelectorOrXpath
    }
}

export type Group = {
    id: number,
    groupIndex?: number,
    updatedAt: number,
    name: string,
    houseId: string[]
}

export type Agent = {
    id: number,
    name: string,
    email: string
}

export enum DialogAction {
    empty = '',
    confirmAddToGroup = 'confirmAddToGroup',
    confirmSendEmail = 'confirmSendEmail',
    confirmDelete = 'confirmDelete',
    confirmDownload = 'confirmDownload',
    email = 'send listing(s)',
    download = 'download listing(s)',
    delete = 'delete listing(s)',
    addToGroup = 'add listing(s) to a group',
    AddToGroup_DuplicatedWarning = 'add to group - duplicated warning',
    compareListing = 'compare listing(s)',

    groupConfirmed = 'groupConfirmed',
    groupEmail = 'send group(s)',
    groupDownload = 'download group(s)',
    groupDelete = 'delete group(s)',
    groupAddNewGroup = 'add a new group',
    groupConfirmSendEmail = 'groupConfirmSendEmail',
    groupConfirmAddNewGroup = 'groupConfirmAddNewGroup',
    groupConfirmDownload = 'groupConfirmDownload',
    groupConfirmDelete = 'groupConfirmDelete',
    groupEditGroup = 'edit this group',
    groupConfirmEditSingleGroup = 'groupConfirmEditSingleGroup',

    groupDetailDeleteGroup = 'delete this group',
    groupDetailConfirmDeleteListing = 'confirm delete this group in group detail',
    groupDetailConfirmDownloadListing = 'confirm download listing in group detail'
}

export enum NavTab {
    listing = 'Listing(s)',
    group = 'Group(s)',
    account = 'Account',
    settings = 'Settings',
    groupDetail = 'GroupDetail',
    compareListing = 'CompareListings',
    filters = 'Filters'
}

export enum OnboardingState {
    extensionIntro,
    listingTab,
    groupTab,
    accountTab,
    settingsTab,
    temporaryClose,
    done,
}

export type IconAction = [
    string, DialogAction
]

export type FilterState = {
    price: number[],
    bedrooms: number[],
    sqft: number[],
}

export enum SettingsMode {
    default,
    editAgent,
    addNewAgent
}

export enum TriggerClickedSource {
    addStuff
}

export type TriggerClickedPayload = {
    source?: TriggerClickedSource
}

export const DIALOG_ACTION_TO_TEXT: {[key in DialogAction]?: string} = {
    [DialogAction.delete]: 'delete',
    [DialogAction.download]: 'download',
    [DialogAction.email]: 'send as email',
    [DialogAction.addToGroup]: 'add to group',
    [DialogAction.compareListing]: 'compare',
    [DialogAction.confirmDelete]: 'deleted',
    [DialogAction.confirmDownload]: 'downloaded',
    [DialogAction.groupDownload]: 'download',
    [DialogAction.groupDelete]: 'delete',
    [DialogAction.groupEmail]: 'send as email',
    [DialogAction.groupDetailDeleteGroup]: 'delete',
    [DialogAction.groupAddNewGroup]: 'create',
    [DialogAction.groupEditGroup]: 'edit',
    [DialogAction.groupConfirmDownload]: 'downloaded',
    [DialogAction.groupConfirmDelete]: 'deleted',
    [DialogAction.groupDetailConfirmDeleteListing]: 'deleted',
    [DialogAction.groupDetailConfirmDownloadListing]: 'downloaded',
}

export type eMessagePayload = {
    name: 'pageview',
    page_title?: string,
    page_location?: string
}
export type eMessage = {
    action: string,
    payload: eMessagePayload
}


export enum LocationType {
    mainPage,
    detailedPage
}

export type SwitchState = {
    [key in LocationType]: boolean
}