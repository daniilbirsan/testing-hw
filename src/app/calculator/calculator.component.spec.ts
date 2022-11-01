import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculatorComponent } from './calculator.component';

describe('CalculatorComponent', () => {
  let component: CalculatorComponent;
  let fixture: ComponentFixture<CalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CalculatorComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(CalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // sum testing
  describe("sum", function () {
    it("should return the value of a + b", function () {
      expect(component.sum(5, 5)).toEqual(10);
      expect(component.sum(-1, 2)).toEqual(1);
      expect(component.sum(-5, 5)).toBe(0);
    });
  });

  // minus testing
  describe("minus", function () {
    it("should return the value of a - b", function () {
      expect(component.minus(4, 6)).toEqual(-2);
      expect(component.minus(0, 3)).toEqual(-3);
    });
  });

  // multiply testing
  describe("multiply", function () {
    it("should return the value of a * b", function () {
      expect(component.multiply(2, 3)).toEqual(6);
      expect(component.multiply(-1, 1)).toEqual(-1);
      expect(component.multiply(1, 0)).toEqual(0);
      expect(component.multiply(-1, -1)).toEqual(1);
    });
  });

  // devide testing

  describe("divide", function () {
    it("should return the value of a / b", function () {
      expect(component.divide(3, 3)).toEqual(1);
      expect(component.divide(6, 2)).toEqual(3);
    });

    it("should throw an error if you try to divide by 0", function () {
      expect(function () { component.divide(1, 0); }).toThrow();
    });
  })
});
