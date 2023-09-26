import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Angular-Calculator';
  toShow = '0';
  currvalue = '';
  writetoinput(value: string) {
    if (this.currvalue == '0') {
      this.currvalue = value;
    }
    this.currvalue = this.currvalue + value;
    this.toShow = this.currvalue;
  }
  equals() {
    try {
      this.toShow = eval(this.currvalue);
      this.currvalue = this.toShow.toString();
    } catch (error) {
      this.toShow = 'Error';
    }
  }
  clearinput() {
    this.currvalue = '';
    this.toShow = '0';
  }
  back() {
    if (this.currvalue.length > 0) {
      this.currvalue = this.currvalue.slice(0, -1);
      this.toShow = this.currvalue === '' ? '0' : this.currvalue;
    }
  }
  calvalue(solve: any) {
    try {
      const result = eval(parseFloat(solve).toString());
      if (isNaN(result) || !isFinite(result)) {
        this.toShow = 'Error';
      } else {
        this.toShow = result.toString();
      }
    } catch (error) {
      this.toShow = 'Error';
    }
  }
}
