var App = function(){

  /* private */

  var pieHover = function(event, pos, obj) {
    if (!obj) {
      $("#hover").css({"visibility": "hidden"});
      return;
    }
    percent = parseFloat(obj.series.percent).toFixed(2);
    $("#hover").html('<span>'+obj.series.label+' ('+percent+'%)</span>').css({"background-color": obj.series.color, "visibility": "visible"});
  }
  
  var pieClick = function(event, pos, obj) {
  }

  var init_pie_chart = function(data) {
    // DEFAULT
    $.plot($("#pie"), data, {
      series: {
        pie: { 
          show: true,
          label: {
            show: false,
            radius: 1,
            formatter: function(label, series){
              return '<div style="font-size:8pt;text-align:center;padding:2px;color:white;">'+label+'<br/>'+Math.round(series.percent)+'%</div>';
            },
            background: { opacity: 0.8 }
          },
        }
      },
      grid: {
        hoverable: true,
        clickable: true
      },
      legend: {
        show: true,
        labelFormatter: function(label, series){
          return '<div id="series-'+series.series+'">'+label+': $'+series.data[0][1].formatMoney()+'</div>';
        },
      }
    });

    $("#pie").bind("plothover", pieHover);
    $("#pie").bind("plotclick", pieClick);

  }

  var load_general_fund_pie = function() {
    var data = [];
    var series = Math.floor(Math.random()*10)+1;
    for( var i = 0; i<series; i++)
    {
      data[i] = { label: "Series"+(i+1), data: Math.floor(Math.random() * 100)+1 }
    }
    
    // DEFAULT
    $.plot($("#pie"), data, {
        series: {
          pie: {
            show: true
          }
        },
        grid: {
          hoverable: true,
          clickable: true
        }
    });
    /*
        $.ajax({url: "/budget_line_items.json",
          data: {
           tag: tag
          },
          success: function(data) {
            chart_data = $.parseJSON(data);
            $.plot($("#pie"), chart_data);
          },
          error: function(data) {
          }
        })
    */
  }

  /* end private */

  return {

    init: function() {

      App.add_some_pie();

    },

    add_some_pie: function(){

      App.load_chart_data();

    },
  
    // Load and set the chart data to our ajax method
    load_chart_data: function(tag) {
    $.ajax({
      url: "/budget_by_department.json", 
        data: {
         tag: tag
        },
        success: function(data) {
          //chart_data = $.parseJSON(data);
          data = App.convert_to_pie_data(data, "department", "expenditure");

          init_pie_chart(data);
          //$.plot($("#pie"), data);
        },
        error: function(data) {
        }
    })
    },
    
    convert_to_pie_data: function(data, name, value) {
      var pie_data = [];
      for(var i=0;i<data.length; i++) {
        pie_data[i] = {label: data[i]["name"], data: data[i]["total_expenditure"]};
      }
      return pie_data;
      // Added sample data and hooked it up to chart, convert data for pie chart
    }
  }

}();

$(document).ready(function($){
  App.init();
});








window.onload = function() {  
  var w = 550,
      h = 600,
      r = 500,
      x = d3.scale.linear().range([0, r]),
      y = d3.scale.linear().range([0, r]),
      node,
      root;

  var pack = d3.layout.pack()
      .size([r, r])
      .value(function(d) { return d.size; })

  var vis = d3.select("body").insert("svg:svg")
      .attr("width", w)
      .attr("height", h)
      .attr("id", "viz")
    .append("svg:g")
      .attr("transform", "translate(" + (w - r) / 2 + "," + (h - r) / 2 + ")");

  d3.json("javascripts/flare.json", function(data) {
    node = root = data;

    var nodes = pack.nodes(root);

    vis.selectAll("circle")
        .data(nodes)
      .enter().append("svg:circle")
        .attr("class", function(d) { return d.children ? "parent" : "child"; })
        .attr("cx", function(d) { return d.x; })
        .attr("cy", function(d) { return d.y; })
        .attr("r", function(d) { return d.r; })
        .on("click", function(d) { return zoom(node == d ? root : d); });

    vis.selectAll("text")
        .data(nodes)
      .enter().append("svg:text")
        .attr("class", function(d) { return d.children ? "parent" : "child"; })
        .attr("x", function(d) { return d.x; })
        .attr("y", function(d) { return d.y; })
        .attr("dy", ".35em")
        .attr("text-anchor", "middle")
        .style("opacity", function(d) { return d.r > 20 ? 1 : 0; })
        .text(function(d) { return d.name; });

    d3.select(window).on("click", function() { zoom(root); });
  });

  function zoom(d, i) {
    var k = r / d.r / 2;
    x.domain([d.x - d.r, d.x + d.r]);
    y.domain([d.y - d.r, d.y + d.r]);

    var t = vis.transition()
        .duration(d3.event.altKey ? 7500 : 750);

    t.selectAll("circle")
        .attr("cx", function(d) { return x(d.x); })
        .attr("cy", function(d) { return y(d.y); })
        .attr("r", function(d) { return k * d.r; });

    t.selectAll("text")
        .attr("x", function(d) { return x(d.x); })
        .attr("y", function(d) { return y(d.y); })
        .style("opacity", function(d) { return k * d.r > 20 ? 1 : 0; });

    node = d;
    d3.event.stopPropagation();
  }
}

