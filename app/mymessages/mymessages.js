import {app} from '../app_module'

import {folderState} from "./messagelist";
import {messagesState} from "./folderlist"
import {messageState} from "./message"
import {composeState} from "./compose"

app.config(function ($stateProvider) {
  let states = [folderState, messagesState, messageState, composeState];
  states.forEach(state => $stateProvider.state(state));
});