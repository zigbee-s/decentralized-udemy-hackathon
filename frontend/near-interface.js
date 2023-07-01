/* Talking with a contract often involves transforming data, we recommend you to encapsulate that logic into a class */

// import { utils } from 'near-api-js';

export class MarketPlace {

    constructor({ contractId, walletToUse }) {
        this.contractId = contractId;
        this.wallet = walletToUse
    }

    async getTutorial() {
        const messages = await this.wallet.viewMethod({ contractId: this.contractId, method: "get_tutorial" })
        console.log(messages)
        return messages
    }

    async addTutorial(uniqueId, courseName, description, instructorDetails, cost, imageId, videoId) {
        // const deposit = utils.format.parseNearAmount(donation);
        return await this.wallet.callMethod({
            contractId: this.contractId, method: "add_tutorial", args: {
                uniqueId: uniqueId, courseName: courseName, description: description,
                instructorDetails: instructorDetails, cost: cost, imageId: imageId,
                videoId: videoId
            }
        });
    }

    async getTotalMessages() {
        const number = await this.wallet.viewMethod({ contractId: this.contractId, method: "total_messages" })
        console.log(number)
        return number
    }

}