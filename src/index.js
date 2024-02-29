import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { CurrentMatchContextProvider } from "./context/matches/currentMatches";
import { AllMatchContextProvider } from "./context/matches/allMatchList";
import { SquadSeriesProvider } from "./context/squad/squadseries";
import { PlayersProvider } from "./context/players/allplyerslist";
import { CricketListProvider } from "./context/cricket/cricketseries";
import { CricketSearchContextProvider } from "./context/cricket/cricketSeriesSearch";
import { SeriesContextProvider } from "./context/series/series";

// Create a root using ReactDOM.createRoot and target the root element with the id "root"
const root = ReactDOM.createRoot(document.getElementById("root"));

// Render the main application component wrapped with context providers
root.render(
  <>
    {/* Provide the current match context to the App component */}
    <CurrentMatchContextProvider>
      {/* Additionally, provide the all match context to the App component */}
      <AllMatchContextProvider>
        <SquadSeriesProvider>
          <PlayersProvider>
            <CricketListProvider>
            <CricketSearchContextProvider>
            <SeriesContextProvider>
            <App />

            </SeriesContextProvider>


            </CricketSearchContextProvider>
            </CricketListProvider>
          </PlayersProvider>
        </SquadSeriesProvider>
        {/* Render the main App component within the context providers */}
      </AllMatchContextProvider>
    </CurrentMatchContextProvider>
  </>
);
