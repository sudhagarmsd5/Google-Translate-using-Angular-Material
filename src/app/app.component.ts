import { DOCUMENT } from '@angular/common';
import { Component, Inject, VERSION } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

interface Food {
  value: string;
  label: string;
}
declare var hello: Function;

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  firstFormGroup!: FormGroup;
  formvalue: any;
  showTranslate: boolean = true;

  googleLanguage: Food[] = [
    {
      value: 'af',
      label: 'Afrikaans',
    },
    {
      value: 'sq',
      label: 'Albanian',
    },
    {
      value: 'ar',
      label: 'Arabic',
    },
    {
      value: 'az',
      label: 'Azerbaijani',
    },
    {
      value: 'eu',
      label: 'Basque',
    },
    {
      value: 'bn',
      label: 'Bengali',
    },
    {
      value: 'be',
      label: 'Belarusian',
    },
    {
      value: 'bg',
      label: 'Bulgarian',
    },
    {
      value: 'ca',
      label: 'Catalan',
    },
    {
      value: 'zh-CN',
      label: 'Chinese Simplified',
    },
    {
      value: 'zh-TW',
      label: 'Chinese Traditional',
    },
    {
      value: 'hr',
      label: 'Croatian',
    },
    {
      value: 'cs',
      label: 'Czech',
    },
    {
      value: 'da',
      label: 'Danish',
    },
    {
      value: 'nl',
      label: 'Dutch',
    },
    {
      value: 'en',
      label: 'English',
    },
    {
      value: 'eo',
      label: 'Esperanto',
    },
    {
      value: 'et',
      label: 'Estonian',
    },
    {
      value: 'tl',
      label: 'Filipino',
    },
    {
      value: 'fi',
      label: 'Finnish',
    },
    {
      value: 'fr',
      label: 'French',
    },
    {
      value: 'gl',
      label: 'Galician',
    },
    {
      value: 'ka',
      label: 'Georgian',
    },
    {
      value: 'de',
      label: 'German',
    },
    {
      value: 'el',
      label: 'Greek',
    },
    {
      value: 'gu',
      label: 'Gujarati',
    },
    {
      value: 'ht',
      label: 'Haitian Creole',
    },
    {
      value: 'iw',
      label: 'Hebrew',
    },
    {
      value: 'hi',
      label: 'Hindi',
    },
    {
      value: 'hu',
      label: 'Hungarian',
    },
    {
      value: 'is',
      label: 'Icelandic',
    },
    {
      value: 'id',
      label: 'Indonesian',
    },
    {
      value: 'ga',
      label: 'Irish',
    },
    {
      value: 'it',
      label: 'Italian',
    },
    {
      value: 'ja',
      label: 'Japanese',
    },
    {
      value: 'kn',
      label: 'Kannada',
    },
    {
      value: 'ko',
      label: 'Korean',
    },
    {
      value: 'la',
      label: 'Latin',
    },
    {
      value: 'lv',
      label: 'Latvian',
    },
    {
      value: 'lt',
      label: 'Lithuanian',
    },
    {
      value: 'mk',
      label: 'Macedonian',
    },
    {
      value: 'ms',
      label: 'Malay',
    },
    {
      value: 'mt',
      label: 'Maltese',
    },
    {
      value: 'no',
      label: 'Norwegian',
    },
    {
      value: 'fa',
      label: 'Persian',
    },
    {
      value: 'pl',
      label: 'Polish',
    },
    {
      value: 'pt',
      label: 'Portuguese',
    },
    {
      value: 'ro',
      label: 'Romanian',
    },
    {
      value: 'ru',
      label: 'Russian',
    },
    {
      value: 'sr',
      label: 'Serbian',
    },
    {
      value: 'sk',
      label: 'Slovak',
    },
    {
      value: 'sl',
      label: 'Slovenian',
    },
    {
      value: 'es',
      label: 'Spanish',
    },
    {
      value: 'sw',
      label: 'Swahili',
    },
    {
      value: 'sv',
      label: 'Swedish',
    },
    {
      value: 'ta',
      label: 'Tamil',
    },
    {
      value: 'te',
      label: 'Telugu',
    },
    {
      value: 'th',
      label: 'Thai',
    },
    {
      value: 'tr',
      label: 'Turkish',
    },
    {
      value: 'uk',
      label: 'Ukrainian',
    },
    {
      value: 'ur',
      label: 'Urdu',
    },
    {
      value: 'vi',
      label: 'Vietnamese',
    },
    {
      value: 'cy',
      label: 'Welsh',
    },
    {
      value: 'yi',
      label: 'Yiddish',
    },
  ];

  constructor(
    private _formBuilder: FormBuilder,
    @Inject(DOCUMENT) private document: Document
  ) {
    this.firstFormGroup = this._formBuilder.group({
      languageControl: ['', Validators.required],
    });
  }

  get writer() {
    return this.firstFormGroup.get('languageControl');
  }

  onlanguagechange() {
    console.log(this.writer.value);
    this.formvalue = this.writer.value;
    localStorage.setItem('googleTranslate', this.formvalue);
    hello();
  }

  showbtn() {
    this.showTranslate = !this.showTranslate;
    console.log(this.showTranslate);
  }
}
