/**
 * 列表页面公用方法
 * @author zhangpf
 * **/
export const tableBase = {
  created() {
    // 默认携带分页参数
    let params = {
      page: 1,
      limit: 10
    }
    this.init(params)
  },
  methods: {
    // 初始化
    init(params) {
      this.loadDataTable(params)
    },
    // 根据名称查询
    searchList() {
      // 基础参数
      let params = {
        username: this.searchName,
        page: 1,
        limit: this.pager.pageSize
      }
      // 判断搜索条件中是否存在下拉框的筛选，必须存在，名称必须保证唯一
      if (this.defaultDemo && this.defaultDemo.selected) {
        params.logType = this.defaultDemo.selected
      }
      this.init(params)
    },
    // 新增
    add() {},
    // 编辑
    edit() {},
    // 查看
    view() {},
    // 删除
    del() {},
    // 分页页面个数
    handleSizeChange(val) {
      this.pager.pageSize = val
      let params = {
        username: this.searchName,
        page: this.pager.currentPage,
        limit: val
      }
      // 判断搜索条件中是否存在下拉框的筛选，必须存在
      if (this.defaultDemo && this.defaultDemo.selected) {
        params.logType = this.defaultDemo.selected
      }
      this.init(params)
    },
    // 分页翻页
    handleCurrentChange(val) {
      this.pager.currentPage = val
      let params = {
        username: this.searchName,
        page: val,
        limit: this.pager.pageSize
      }
      // 判断搜索条件中是否存在下拉框的筛选，必须存在
      if (this.defaultDemo && this.defaultDemo.selected) {
        params.logType = this.defaultDemo.selected
      }
      this.init(params)
    }
  }
}
