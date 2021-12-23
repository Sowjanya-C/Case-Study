export interface UpdateInterface{
    taskID :number;
    ownerID : number;
    creatorID: number;
    name : string;
    description : string;
    status : string;
    priority : string;
    notes : string;
    isBookmarked : Boolean;
    createdOn: string;
    statusChangedOn : string;
}