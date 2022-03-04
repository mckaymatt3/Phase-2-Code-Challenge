import React from "react";

const botTypeClasses = {
  Assault: "icon military",
  Defender: "icon shield",
  Support: "icon plus circle",
  Medic: "icon ambulance",
  Witch: "icon magic",
  Captain: "icon star",
};

function BotCard({ bot, onChangeBot, deleteBot }) {
  // create function to target each bot and pass in parent function
  function onClicky () {
    //console.log("This bot clicked:", bot)
    // addBot(bot)
    onChangeBot(bot)
  }

  // create another click function to target bot to delete to pass in from parent function
  function onClickyTwo() {
    // event.stopPropagation();
    // console.log("This bot clicked within delete: ", bot)
    deleteBot(bot)
  }

  return (
    <div className="ui column">
      <div
        className="ui card"
        key={bot.id}
        onClick={() => onClicky(bot)}
      >
        <div className="image">
          <img alt="oh no!" src={bot.avatar_url} />
        </div>
        <div className="content">
          <div className="header">
            {bot.name}
            <i className={botTypeClasses[bot.bot_class]} />
          </div>
          <div className="meta text-wrap">
            <small>{bot.catchphrase}</small>
          </div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat" />
            {bot.health}
          </span>

          <span>
            <i className="icon lightning" />
            {bot.damage}
          </span>
          <span>
            <i className="icon shield" />
            {bot.armor}
          </span>
          <span>
            <div className="ui center aligned segment basic">
              <button
                className="ui mini red button"
                onClick={() =>
                  onClickyTwo(bot)
                }
              >
                x
              </button>
            </div>
          </span>
        </div>
      </div>
    </div>
  );
}

export default BotCard;
