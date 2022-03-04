import React from "react";
import BotCard from "./BotCard";

function YourBotArmy({myBots, removeBot, deleteBot}) {
  //your bot army code here...
  // create const with function to display bots simialr to bot collection
  const myBotArmy = myBots.map(function(oneMyBot) {
    // console.log("One my Bot: ", oneMyBot)
    return <BotCard key={oneMyBot.id} bot={oneMyBot} onChangeBot={removeBot} deleteBot={deleteBot}/>
  })


  return (
    <div className="ui segment inverted olive bot-army">
      <div className="ui five column grid">
        <div className="row bot-army-row">
          Your Bot Army
          {
            myBotArmy
          }
        </div>
      </div>
    </div>
  );
}

export default YourBotArmy;
