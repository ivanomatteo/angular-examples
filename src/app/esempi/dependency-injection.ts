import 'reflect-metadata';



export class Pippo {

}

export class Paperino {
  constructor(x) {

  }
}
export class Pluto {
  constructor(x: string[]) {

  }
}




export class DependencyInjection {

  static providers = {
    Paperino: () => new Paperino('fdsdfsdfsdfsd')
  };

  static inject(classname) {
    //const types = Reflect.getMetadata('design:paramtypes', target);
    if (this.providers[classname]) {
      return this.providers[classname]();
    }

    return eval('new ' + classname + '();');
  }
/*
    console.log('DependencyInjection', DependencyInjection.inject('Pippo'));
    console.log('DependencyInjection', DependencyInjection.inject('Paperino'));
    console.log('DependencyInjection', DependencyInjection.inject('Pluto'));
*/



}
