'use strict';

define("ember-test/tests/integration/components/addbtn-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Component | addbtn', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "yoKNM9kp",
        "block": "{\"symbols\":[],\"statements\":[[1,[21,\"addbtn\"],false]],\"hasEval\":false}",
        "meta": {}
      }));
      assert.equal(this.element.textContent.trim(), ''); // Template block usage:

      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "WVi6kS4Y",
        "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"addbtn\",null,null,{\"statements\":[[0,\"        template block text\\n\"]],\"parameters\":[]},null],[0,\"    \"]],\"hasEval\":false}",
        "meta": {}
      }));
      assert.equal(this.element.textContent.trim(), 'template block text');
    });
  });
});
define("ember-test/tests/integration/components/form-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Component | form', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "q67DqOlf",
        "block": "{\"symbols\":[],\"statements\":[[1,[21,\"form\"],false]],\"hasEval\":false}",
        "meta": {}
      }));
      assert.equal(this.element.textContent.trim(), ''); // Template block usage:

      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "vS9464pF",
        "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"form\",null,null,{\"statements\":[[0,\"        template block text\\n\"]],\"parameters\":[]},null],[0,\"    \"]],\"hasEval\":false}",
        "meta": {}
      }));
      assert.equal(this.element.textContent.trim(), 'template block text');
    });
  });
});
define("ember-test/tests/lint/app.lint-test", [], function () {
  "use strict";

  QUnit.module('ESLint | app');
  QUnit.test('adapters/baseapi.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'adapters/baseapi.js should pass ESLint\n\n');
  });
  QUnit.test('adapters/list.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'adapters/list.js should pass ESLint\n\n');
  });
  QUnit.test('app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass ESLint\n\n');
  });
  QUnit.test('components/form.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'components/form.js should pass ESLint\n\n6:7 - Use closure actions, unless you need bubbling (ember/closure-actions)');
  });
  QUnit.test('models/list.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/list.js should pass ESLint\n\n');
  });
  QUnit.test('resolver.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'resolver.js should pass ESLint\n\n');
  });
  QUnit.test('router.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass ESLint\n\n');
  });
  QUnit.test('routes/index.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/index.js should pass ESLint\n\n');
  });
  QUnit.test('routes/list.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/list.js should pass ESLint\n\n');
  });
  QUnit.test('routes/list/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/list/new.js should pass ESLint\n\n');
  });
  QUnit.test('serializers/list.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/list.js should pass ESLint\n\n');
  });
});
define("ember-test/tests/lint/templates.template.lint-test", [], function () {
  "use strict";

  QUnit.module('TemplateLint');
  QUnit.test('ember-test/templates/application.hbs', function (assert) {
    assert.expect(1);
    assert.ok(false, 'ember-test/templates/application.hbs should pass TemplateLint.\n\nember-test/templates/application.hbs\n  3:4  error  HTML comment detected  no-html-comments\n  19:10  error  HTML comment detected  no-html-comments\n  20:8  error  HTML comment detected  no-html-comments\n');
  });
  QUnit.test('ember-test/templates/components/form.hbs', function (assert) {
    assert.expect(1);
    assert.ok(false, 'ember-test/templates/components/form.hbs should pass TemplateLint.\n\nember-test/templates/components/form.hbs\n  4:19  error  you must use double quotes in templates  quotes\n  4:31  error  you must use double quotes in templates  quotes\n');
  });
  QUnit.test('ember-test/templates/list.hbs', function (assert) {
    assert.expect(1);
    assert.ok(false, 'ember-test/templates/list.hbs should pass TemplateLint.\n\nember-test/templates/list.hbs\n  8:12  error  links with target="_blank" must have rel="noopener"  link-rel-noopener\n  12:21  error  you must use double quotes in templates  quotes\n');
  });
  QUnit.test('ember-test/templates/list/new.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ember-test/templates/list/new.hbs should pass TemplateLint.\n\n');
  });
});
define("ember-test/tests/lint/tests.lint-test", [], function () {
  "use strict";

  QUnit.module('ESLint | tests');
  QUnit.test('integration/components/addbtn-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/addbtn-test.js should pass ESLint\n\n');
  });
  QUnit.test('integration/components/form-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/form-test.js should pass ESLint\n\n');
  });
  QUnit.test('test-helper.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass ESLint\n\n');
  });
  QUnit.test('unit/adapters/api-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/adapters/api-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/adapters/baseapi-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/adapters/baseapi-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/adapters/list-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/adapters/list-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/models/list-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/list-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/models/new-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/new-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/routes/list-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/list-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/routes/list/new-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/list/new-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/serializers/list-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/serializers/list-test.js should pass ESLint\n\n');
  });
});
define("ember-test/tests/test-helper", ["ember-test/app", "ember-test/config/environment", "@ember/test-helpers", "ember-qunit"], function (_app, _environment, _testHelpers, _emberQunit) {
  "use strict";

  (0, _testHelpers.setApplication)(_app.default.create(_environment.default.APP));
  (0, _emberQunit.start)();
});
define("ember-test/tests/unit/adapters/api-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Adapter | api', function (hooks) {
    (0, _emberQunit.setupTest)(hooks); // Replace this with your real tests.

    (0, _qunit.test)('it exists', function (assert) {
      let adapter = this.owner.lookup('adapter:api');
      assert.ok(adapter);
    });
  });
});
define("ember-test/tests/unit/adapters/baseapi-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Adapter | baseapi', function (hooks) {
    (0, _emberQunit.setupTest)(hooks); // Replace this with your real tests.

    (0, _qunit.test)('it exists', function (assert) {
      let adapter = this.owner.lookup('adapter:baseapi');
      assert.ok(adapter);
    });
  });
});
define("ember-test/tests/unit/adapters/list-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Adapter | list', function (hooks) {
    (0, _emberQunit.setupTest)(hooks); // Replace this with your real tests.

    (0, _qunit.test)('it exists', function (assert) {
      let adapter = this.owner.lookup('adapter:list');
      assert.ok(adapter);
    });
  });
});
define("ember-test/tests/unit/models/list-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Model | list', function (hooks) {
    (0, _emberQunit.setupTest)(hooks); // Replace this with your real tests.

    (0, _qunit.test)('it exists', function (assert) {
      let store = this.owner.lookup('service:store');
      let model = store.createRecord('list', {});
      assert.ok(model);
    });
  });
});
define("ember-test/tests/unit/models/new-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Model | new', function (hooks) {
    (0, _emberQunit.setupTest)(hooks); // Replace this with your real tests.

    (0, _qunit.test)('it exists', function (assert) {
      let store = this.owner.lookup('service:store');
      let model = store.createRecord('new', {});
      assert.ok(model);
    });
  });
});
define("ember-test/tests/unit/routes/list-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Route | list', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:list');
      assert.ok(route);
    });
  });
});
define("ember-test/tests/unit/routes/list/new-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Route | list/new', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:list/new');
      assert.ok(route);
    });
  });
});
define("ember-test/tests/unit/serializers/list-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Serializer | list', function (hooks) {
    (0, _emberQunit.setupTest)(hooks); // Replace this with your real tests.

    (0, _qunit.test)('it exists', function (assert) {
      let store = this.owner.lookup('service:store');
      let serializer = store.serializerFor('list');
      assert.ok(serializer);
    });
    (0, _qunit.test)('it serializes records', function (assert) {
      let store = this.owner.lookup('service:store');
      let record = store.createRecord('list', {});
      let serializedRecord = record.serialize();
      assert.ok(serializedRecord);
    });
  });
});
define('ember-test/config/environment', [], function() {
  var prefix = 'ember-test';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(unescape(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

require('ember-test/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;
//# sourceMappingURL=tests.map
