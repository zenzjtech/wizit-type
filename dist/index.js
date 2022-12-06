"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailDeliveryStatus = exports.MessageResult = exports.LocationType = exports.DIALOG_ACTION_TO_TEXT = exports.TriggerClickedSource = exports.SettingsMode = exports.OnboardingState = exports.NavTab = exports.DialogAction = exports.SwitcherContainerType = exports.houseDetailFormatMapping = exports.houseDetailAttributes = exports.Site = void 0;
var Site;
(function (Site) {
    Site["zillow"] = "zillow.com";
    Site["realtor"] = "realtor.com";
})(Site = exports.Site || (exports.Site = {}));
exports.houseDetailAttributes = [
    'price', 'bedrooms', 'bathrooms', 'sqft', 'address', 'number', 'street', 'city',
    'state', 'zip', 'timeListed', 'yearBuilt', 'pricePerSqft',
    'hoaFees', 'propertyTaxes', 'mlsNumber', 'imageUrl', 'url', 'updatedAt', 'houseId', 'site', 'groupName'
];
exports.houseDetailFormatMapping = {
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
};
var SwitcherContainerType;
(function (SwitcherContainerType) {
    SwitcherContainerType[SwitcherContainerType["parent"] = 0] = "parent";
    SwitcherContainerType[SwitcherContainerType["sibling"] = 1] = "sibling";
})(SwitcherContainerType = exports.SwitcherContainerType || (exports.SwitcherContainerType = {}));
var DialogAction;
(function (DialogAction) {
    DialogAction["empty"] = "";
    DialogAction["confirmAddToGroup"] = "confirmAddToGroup";
    DialogAction["confirmSendEmail"] = "confirmSendEmail";
    DialogAction["confirmDelete"] = "confirmDelete";
    DialogAction["confirmDownload"] = "confirmDownload";
    DialogAction["email"] = "send listing(s)";
    DialogAction["download"] = "download listing(s)";
    DialogAction["delete"] = "delete listing(s)";
    DialogAction["addToGroup"] = "add listing(s) to a group";
    DialogAction["AddToGroup_DuplicatedWarning"] = "add to group - duplicated warning";
    DialogAction["compareListing"] = "compare listing(s)";
    DialogAction["groupConfirmed"] = "groupConfirmed";
    DialogAction["groupEmail"] = "send group(s)";
    DialogAction["groupEmailWarning"] = "send email warning";
    DialogAction["groupDownload"] = "download group(s)";
    DialogAction["groupDelete"] = "delete group(s)";
    DialogAction["groupAddNewGroup"] = "add a new group";
    DialogAction["groupConfirmSendEmail"] = "groupConfirmSendEmail";
    DialogAction["groupConfirmAddNewGroup"] = "groupConfirmAddNewGroup";
    DialogAction["groupConfirmDownload"] = "groupConfirmDownload";
    DialogAction["groupConfirmDelete"] = "groupConfirmDelete";
    DialogAction["groupEditGroup"] = "edit this group";
    DialogAction["groupConfirmEditSingleGroup"] = "groupConfirmEditSingleGroup";
    DialogAction["groupDetailDeleteGroup"] = "delete this group";
    DialogAction["groupDetailConfirmDeleteListing"] = "confirm delete this group in group detail";
    DialogAction["groupDetailConfirmDownloadListing"] = "confirm download listing in group detail";
})(DialogAction = exports.DialogAction || (exports.DialogAction = {}));
var NavTab;
(function (NavTab) {
    NavTab["listing"] = "Listing(s)";
    NavTab["group"] = "Group(s)";
    NavTab["account"] = "Account";
    NavTab["settings"] = "Settings";
    NavTab["groupDetail"] = "GroupDetail";
    NavTab["compareListing"] = "CompareListings";
    NavTab["filters"] = "Filters";
})(NavTab = exports.NavTab || (exports.NavTab = {}));
var OnboardingState;
(function (OnboardingState) {
    OnboardingState[OnboardingState["extensionIntro"] = 0] = "extensionIntro";
    OnboardingState[OnboardingState["listingTab"] = 1] = "listingTab";
    OnboardingState[OnboardingState["groupTab"] = 2] = "groupTab";
    OnboardingState[OnboardingState["accountTab"] = 3] = "accountTab";
    OnboardingState[OnboardingState["settingsTab"] = 4] = "settingsTab";
    OnboardingState[OnboardingState["temporaryClose"] = 5] = "temporaryClose";
    OnboardingState[OnboardingState["done"] = 6] = "done";
})(OnboardingState = exports.OnboardingState || (exports.OnboardingState = {}));
var SettingsMode;
(function (SettingsMode) {
    SettingsMode[SettingsMode["default"] = 0] = "default";
    SettingsMode[SettingsMode["editAgent"] = 1] = "editAgent";
    SettingsMode[SettingsMode["addNewAgent"] = 2] = "addNewAgent";
})(SettingsMode = exports.SettingsMode || (exports.SettingsMode = {}));
var TriggerClickedSource;
(function (TriggerClickedSource) {
    TriggerClickedSource[TriggerClickedSource["addStuff"] = 0] = "addStuff";
})(TriggerClickedSource = exports.TriggerClickedSource || (exports.TriggerClickedSource = {}));
exports.DIALOG_ACTION_TO_TEXT = (_a = {},
    _a[DialogAction.delete] = 'delete',
    _a[DialogAction.download] = 'download',
    _a[DialogAction.email] = 'send as email',
    _a[DialogAction.addToGroup] = 'add to group',
    _a[DialogAction.compareListing] = 'compare',
    _a[DialogAction.confirmDelete] = 'deleted',
    _a[DialogAction.confirmDownload] = 'downloaded',
    _a[DialogAction.groupDownload] = 'download',
    _a[DialogAction.groupDelete] = 'delete',
    _a[DialogAction.groupEmail] = 'send as email',
    _a[DialogAction.groupDetailDeleteGroup] = 'delete',
    _a[DialogAction.groupAddNewGroup] = 'create',
    _a[DialogAction.groupEditGroup] = 'edit',
    _a[DialogAction.groupConfirmDownload] = 'downloaded',
    _a[DialogAction.groupConfirmDelete] = 'deleted',
    _a[DialogAction.groupDetailConfirmDeleteListing] = 'deleted',
    _a[DialogAction.groupDetailConfirmDownloadListing] = 'downloaded',
    _a);
var LocationType;
(function (LocationType) {
    LocationType[LocationType["mainPage"] = 0] = "mainPage";
    LocationType[LocationType["detailedPage"] = 1] = "detailedPage";
})(LocationType = exports.LocationType || (exports.LocationType = {}));
var MessageResult;
(function (MessageResult) {
    MessageResult[MessageResult["Success"] = 0] = "Success";
    MessageResult[MessageResult["Error"] = 1] = "Error";
})(MessageResult = exports.MessageResult || (exports.MessageResult = {}));
var EmailDeliveryStatus;
(function (EmailDeliveryStatus) {
    EmailDeliveryStatus["delivered"] = "delivered";
    EmailDeliveryStatus["dropped"] = "dropped";
    EmailDeliveryStatus["bounced"] = "bounced";
    EmailDeliveryStatus["deferred"] = "deferred";
    EmailDeliveryStatus["processed"] = "processed";
})(EmailDeliveryStatus = exports.EmailDeliveryStatus || (exports.EmailDeliveryStatus = {}));
//# sourceMappingURL=index.js.map