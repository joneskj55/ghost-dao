import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const bundleDrop = sdk.getBundleDropModule(
  "0x69bAC30852d4AACec1449dda8f01626582E79fD5"
);

(async () => {
  try {
    await bundleDrop.createBatch([
      {
        name: "Sheepish Ghost",
        description: "This NFT will give you access to GhostDAO!",
        image: readFileSync("scripts/assets/ghost.png"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})();
