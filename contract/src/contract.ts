import { NearBindgen, near, call, view, Vector } from 'near-sdk-js'
import { POINT_ONE, Tutorial } from './model'

@NearBindgen({})
class MarketPlace {
  messages: Vector<Tutorial> = new Vector<Tutorial>("v-uid");

  // @call({ payableFunction: true })
  // // Public - Adds a new message.
  // add_tutorial({ courseName, description, instructorDetails, cost, imageId, videoId }: { courseName: string, description: string, instructorDetails, cost: string ,imageId: string, videoId: string}) {
  //   // If the user attaches more than 0.1N the message is premium
  //   const premium = near.attachedDeposit() >= BigInt(POINT_ONE);
  //   const sender = near.predecessorAccountId();

  //   const message: Tutorial = { premium, sender, courseName, description, instructorDetails, cost, imageId, videoId };
  //   this.messages.push(message);
  // }

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
}
