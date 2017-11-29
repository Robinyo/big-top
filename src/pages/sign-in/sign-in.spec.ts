import { ComponentFixture, async } from '@angular/core/testing';

// import { TestUtils } from '../../test';
import { TestUtils } from '@tests/test';

// import { SignInPage } from './sign-in';
import { SignInPage } from '@pages/sign-in/sign-in';

let fixture: ComponentFixture<SignInPage> = null;
let instance: any = null;

describe('Page: Sign in', () => {

  beforeEach(async(() => TestUtils.beforeEachCompiler([SignInPage]).then(compiled => {
    fixture = compiled.fixture;
    instance = compiled.instance;
    fixture.detectChanges();
  })));

  afterEach(() => {
    fixture.destroy();
  });

  it('Should create the Sign in page', async(() => {
    expect(instance).toBeTruthy();
  }));
});

// http://lathonez.com/2017/ionic-2-unit-testing/

// https://github.com/lathonez/clicker/blob/master/src/pages/clickerList/clickerList.spec.ts
// https://github.com/lathonez/clicker/blob/master/src/pages/page2/page2.spec.ts
