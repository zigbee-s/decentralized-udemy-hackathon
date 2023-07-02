import { NearBindgen, near, call, view, Vector } from 'near-sdk-js'
import { POINT_ONE, Tutorial } from './model'

@NearBindgen({})
class MarketPlace {
  messages: Vector<Tutorial> = new Vector<Tutorial>("v-uid");

  @call({})
  // Public - Adds a new message.
  add_tutorial({ uniqueId, courseName, description, instructorDetails, cost, imageId, videoId }:
    {
      uniqueId: string, courseName: string, description: string, instructorDetails, cost: string,
      imageId: string, videoId: string
    }) {
    // If the user attaches more than 0.1N the message is premium

    const sender = near.predecessorAccountId();

    const message: Tutorial = { sender, uniqueId, courseName, description, instructorDetails, cost, imageId, videoId };
    this.messages.push(message);
  }

  @view({})
  // Returns an array of messages.
  get_tutorial({ from_index = 0, limit = 20 }: { from_index: number, limit: number }): Tutorial[] {
    return this.messages.toArray().slice(from_index, from_index + limit);
  }

  @view({})
  total_messages(): number { return this.messages.length }

  @call({ payableFunction: true })
  buy_tutorial({ creator }: { creator: string }) {

    let buyer = near.predecessorAccountId();
    // Get who is calling the method and how much $NEAR they attached
    let pay: bigint = near.attachedDeposit() as bigint;

    let toTransfer = pay;

    // Send the money to the beneficiary
    const promise = near.promiseBatchCreate(creator)
    near.promiseBatchActionTransfer(promise, toTransfer)

    // this.viewableTuts.set(buyer, "donatedSoFar")

    return "success"
  }
}
