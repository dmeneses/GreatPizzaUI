import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopppingEditorComponent } from './toppping-editor.component';

describe('TopppingEditorComponent', () => {
  let component: TopppingEditorComponent;
  let fixture: ComponentFixture<TopppingEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopppingEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopppingEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
