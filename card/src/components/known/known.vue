<template>
<div class="box" >
    <baidu-map :center="center" :zoom="zoom" @ready="handler" style="height:500px;width:100%" @click="getClickInfo" :scroll-wheel-zoom='true' class="map" >
    </baidu-map> 
    <div  class="tip" >
    乘684路、668路、949路、b52路内环、b25路外环、b23路、b5路、12号线、23号线、58路、99路、105路、b111路公交车均可到达。<br>
    开放时间:<br>周一至周日   8:30--20:30
    国家法定假日   9:00--16:00<br>
    有序开放期间，为确保读者身体健康安全，我馆对每日、同时段入馆人数进行总量控制.<br>
    我馆将全力落实常态化防控，保障疫情防控期间对外开放的安全、有序，继续秉持致力于卓越的知识服务理念，<br>
    也期待读者和我们一起做好常态化防控工作，遵守规定，文明借阅。
    <p>续借电话：0577-88962777</p>
    </div>



</div>
</template>>
<script>
export default {
  name: 'TestBaiDu',
  data () {
    return {
      center: {lng: 120.152728, lat: 30.228063},
      zoom: 13
    }
  },
  methods: {
    handler ({BMap, map}) {
      var point = new BMap.Point(120.152728,30.228063)
      map.centerAndZoom(point, 13)
      var marker = new BMap.Marker(point) // 创建标注
      map.addOverlay(marker) // 将标注添加到地图中
      var circle = new BMap.Circle(point, 6, { strokeColor: 'Red', strokeWeight: 6, strokeOpacity: 1, Color: 'Red', fillColor: '#f03' })
      map.addOverlay(circle)
    },
    getClickInfo (e) {
      console.log(e.point.lng)
      console.log(e.point.lat)
      this.center.lng = e.point.lng
      this.center.lat = e.point.lat
    },
  }
}
</script>
<style scoped>
.tip{
position: absolute;
top: 580px;
left: 200px;
}
.box{
margin-bottom: 300px;
height:100%;
}

</style>