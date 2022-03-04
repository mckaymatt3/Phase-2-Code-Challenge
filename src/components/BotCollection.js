import React from "react";
import BotCard from "./BotCard";

function BotCollection({bots, addBot, deleteBot}) {
  // Your code here
  // create const with function to render the items below
  const showBots = bots.map(function(bot){
    // console.log("each bot: ", bot)
    return <BotCard key={bot.id} bot={bot} onChangeBot={addBot} deleteBot={deleteBot} />
  })


  return (
    <div className="ui four column grid">
      <div className="row">
      Collection of all bots
        {
          showBots
        }
      </div>
    </div>
  );
}

export default BotCollection;
