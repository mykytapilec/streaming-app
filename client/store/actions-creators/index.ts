import * as PlayerActionCreators from '../actions-creators/player'
import * as TrackActionCreators from '../actions-creators/track'

const allActionCreators = {
    ...PlayerActionCreators,
    ...TrackActionCreators
} 
  
export default allActionCreators