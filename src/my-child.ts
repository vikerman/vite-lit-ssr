import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("my-child")
export class MyChild extends LitElement {
  @property({ type: String })
  name: string = "";

  private _click() {
    this.name += "!";
  }

  render() {
    return html`<button @click=${this._click}>Hello ${this.name}</button>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "my-child": MyChild;
  }
}
