import View from '../src/view';
import CareersPageTemplate from './templates/careers.hbs';

export default class CareersPageRoute extends View {
  static isComponent = false;

  protected template = CareersPageTemplate;
  protected ui = {};

  protected async onRender() {
    console.log('Careers page rendered!');
  }
}