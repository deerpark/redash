import template from './visual-query-editor.html';

export default function init(ngModule) {
  ngModule.component('visualQueryEditor', {
    template,
    bindings: {
      sourceMode: '=',
      queryText: '=',
      schema: '<',
      dataSources: '<',
      dataSource: '<',
      canEdit: '=',
      isDirty: '=',
      isQueryOwner: '=',
      updateDataSource: '&',
      canExecuteQuery: '&',
      executeQuery: '&',
      queryExecuting: '=',
      saveQuery: '&',
      updateQuery: '&',
      listenForResize: '&',
      listenForEditorCommand: '&',
    },
    controller($scope) {
      'ngInject';

      console.log(this, $scope);
    },
  });
}

init.init = true;
