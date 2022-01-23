import { v4 as uuidv4 } from 'uuid'
import Spreadsheet from './Spreadsheet';

class User {
  id: string;
  userName: string;
  email: string;
  spreadsheets: string[];
  registered: Date;

  constructor(userName: string, email: string) {
    this.id = uuidv4();
    this.userName = userName;
    this.email = email;
    this.spreadsheets = [];
    this.registered = new Date();
  }
}

export default User