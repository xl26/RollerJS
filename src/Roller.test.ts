import {Roller} from './Roller';


describe("Roller Tests", ()=> {
  test("Inititalize the class object with valid number of faces", ()=> {
    let Obj = new Roller(4);
    let temp = Obj.getFaces();
    expect(temp).toBe(4);
  });

  test("Inititalize the class object with invalid number of faces", ()=> {
    let Obj = new Roller(1);
    let temp = Obj.getFaces();
    expect(temp).toBe(6);
  });

  test("Roll Test: The roll function should return 0 if a wrong value is provided", ()=> {
    let Obj = new Roller(4);
    let temp = Obj.roll(5);
    expect(temp).toBe(0);
  });

  test("Roll Test: the roll function should return the correct value provided.", ()=> {
    let Obj = new Roller(4);
    let temp = Obj.roll(3);
    expect(temp).toBe(3);
  });

  test("Last roll Test : should return the last roll that's made.", ()=> {
    let Obj = new Roller(6);
    Obj.roll(2);
    Obj.roll(3);
    Obj.roll(5);
    let result = Obj.last();
    expect(result).toBe(5);
  });

  test("Distribution test", ()=> {
    let Obj = new Roller(6);
    Obj.roll(2);
    Obj.roll(5);
    Obj.roll(3);
    Obj.roll(2);
    Obj.roll(1);
    Obj.roll(3);
    Obj.roll(2);
    Obj.roll(4);
    let theMap = Obj.distribution();
    let result = theMap.get(2);
    expect(result).toBe(3);
  });

})