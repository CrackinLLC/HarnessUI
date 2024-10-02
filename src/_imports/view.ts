import type Model from '../../model/_baseModel';
import type { Attributes } from '../../util/attributes';
import type BaseView from '../_baseView';

export interface AttachReference {
  view: BaseView;
  id: string;
}

export interface BaseViewOptions {
  id?: string;
  classNames?: string[];
  attributes?: Record<string, string | undefined>; // Inline DOM attributes, not to be confused with model attributes
  attachTo?: HTMLElement | NodeListOf<HTMLElement> | AttachReference | string;
  prepend?: boolean;
  customEvents?: string[];
  preventDefault?: boolean; // Capture click events on view el and prevent default behavior

  model?: Model | Attributes | string;
  modelType?: string; // Will attempt to infer model type based on attributes, but for ambiguous cases should explicitly state type here
}

export interface RenderOptions {
  tagName?: string;
}

export interface ErrorStateOptions {
  preventHanding?: boolean; // Prevent the parent from handling the removal of the error state
  attachTo?: HTMLElement;
}

export const enum LoaderType {
  Slosh = 'slosh-loader',
}

export const LoaderMarkup = {
  'slosh-loader': '<div class="inner"></div>',
};

export const errorTemplate = (msg: string): HTMLElement => {
  const errorEl = document.createElement('div');
  errorEl.classList.add('error-message');
  errorEl.innerText = msg;
  return errorEl;
};

export const chipTemplate = (label: string, includeX = false): HTMLElement => {
  const chipEl = document.createElement('div');
  chipEl.classList.add('chip');
  chipEl.innerText = label;

  if (includeX) {
    const X = document.createElement('span');
    X.classList.add('chip-remove');
    X.innerText = '×';
    chipEl.appendChild(X);
  }

  return chipEl;
};

export const loaderTemplate = ({
  type = LoaderType.Slosh,
  wrapped = false,
}: {
  type?: LoaderType;
  wrapped?: boolean;
} = {}): HTMLElement => {
  const loadingStateEl = document.createElement('div');
  loadingStateEl.classList.add('loading-state');
  loadingStateEl.innerHTML = `<span class="${['loader', type, wrapped ? 'loader-wrapped' : ''].join(' ')}" aria-hidden="true">${LoaderMarkup[type]}</span>`;
  return loadingStateEl;
};
