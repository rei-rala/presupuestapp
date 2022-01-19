import { v4 as uuidv4 } from 'uuid'
import Spreadsheet from './Spreadsheet';

class User {
  id: string;
  userName: string;
  email: string;
  spreadsheets: Spreadsheet[];

  constructor(userName: string, email: string) {
    this.id = uuidv4();
    this.userName = userName;
    this.email = email;
    this.spreadsheets = [];
  }
}

export default User