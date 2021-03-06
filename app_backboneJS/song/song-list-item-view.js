const SongListItemView = Backbone.View.extend({
  tagName: 'div',
  className: 'song-item-view',
  template() {
    const fn = _.template($('script#song-item-view').html());
    return fn.apply(this, arguments);
  },
  render: function () {
    this.$el.html(this.template(this.model.attributes));
    return this;
  },
});

export { SongListItemView };
