import React, {useEffect, useState} from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";

function BotsPage() {
  //start here with your code for step one
  // set State
  const [bots, setBots] = useState([])
  const [myBots, setMyBots] = useState([])

 // fetch
  useEffect(() =>
    fetch(`http://localhost:8002/bots`)
    .then(response => response.json())
    .then(botsData => {
      console.log("Bots Data:" , botsData)
      setBots(botsData)
    })
    ,[])

  console.log("bots: ", bots)

  // add function to add 
  function addBot (addBotToMyBots) {
    // create const to check find and not include twice
    const checkMyBots = myBots.find(function(myBot){
      return myBot.id === addBotToMyBots.id
    })
    if (!checkMyBots) {
    return setMyBots([...myBots, addBotToMyBots])
    }
  }

  console.log("my bots currently: ", myBots )


  // add function to remove
  function removeBot (removeFromMyBots) {
    // add const to filter out item clicked
    const filterOutBot = myBots.filter(function(myBot){
      return myBot.id !== removeFromMyBots.id
    })
    if (filterOutBot)
      return setMyBots(filterOutBot)
  }

  // add function to fetch delete and re-render your state
  function deleteBot (deleteThisBot) {
    // create const for BotId
    const botId = deleteThisBot.id
    // add fetch delete first
    fetch(`http://localhost:8002/bots/${botId}`, {
      method: "DELETE"

    })
    .then(response => response.json())
    .then(() => {
      removeBot(deleteThisBot)
      setBots(bots.filter(function(currentBot){
        return currentBot.id !== deleteThisBot.id
      }))
      
  })
}

  return (
    <div>
      <YourBotArmy myBots={myBots} removeBot={removeBot} deleteBot={deleteBot}/>
      <BotCollection bots={bots} addBot={addBot} deleteBot={deleteBot}/>
    </div>
  )
}

export default BotsPage;
