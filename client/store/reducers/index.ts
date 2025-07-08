import {combineReducers} from "redux";
import { HYDRATE } from "next-redux-wrapper";
import {playerReducer} from "./playerReducer";
import { trackReducer } from "./trackReducer";


const rootReducer = combineReducers({
    player: playerReducer,
    track: trackReducer
})

interface HydrateAction {
    type: typeof HYDRATE;
    payload: RootState;
}

type PlayerAction = Parameters<typeof playerReducer>[1];
type TrackAction = Parameters<typeof trackReducer>[1];

type AppAction = HydrateAction | PlayerAction | TrackAction;

export const reducer = (state: RootState | undefined, action: AppAction): RootState => {
    if (action.type === HYDRATE) {
        const nextState: RootState & { count?: number } = {
            ...state, // use previous state
            ...action.payload, // apply delta from hydration
        }
        // No 'count' property in RootState, so nothing to preserve here
        return nextState
    } else {
        return rootReducer(state, action)
    }
}

export type RootState = ReturnType<typeof rootReducer>