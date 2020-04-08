import Component from '@glimmer/component';

export default class AspecRatioComponent extends Component {
  get style() {
    let padding = this.args.ratio.split(':').reduce((first, second) => second / first);
    return `padding-bottom: ${padding * 100}%`;
  }
}
