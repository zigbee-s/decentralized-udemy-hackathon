export const POINT_ONE = '100000000000000000000000';

export class Tutorial {
    sender: string;
    uniqueId: string;
    courseName: string;
    description: string;
    instructorDetails: string;
    cost: string;
    imageId: string;
    videoId: string;


    constructor({ sender, uniqueId, courseName, description, instructorDetails, cost, imageId, videoId }: Tutorial) {
        this.sender = sender;
        this.uniqueId = uniqueId;
        this.courseName = courseName;
        this.description = description;
        this.instructorDetails = instructorDetails;
        this.cost = cost;
        this.imageId = imageId;
        this.videoId = videoId;
    }
}