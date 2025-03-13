using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Diagnostics;
using System.Drawing;
using System.Linq;
using System.Reflection.Emit;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace ATV_04
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
            toolStripLabel1.Text = DateTime.Now.ToLongDateString();
            pictureBox2.Image = Image.FromFile("c:\\Imagens\\alarme.jpg");
            
        }

        private void toolStrip1_ItemClicked(object sender, ToolStripItemClickedEventArgs e)
        {
           
        }

        private void label1_Click(object sender, EventArgs e)
        {
            
        }

        private void timer1_Tick(object sender, EventArgs e)
        {
            label1.Text = DateTime.Now.ToLongTimeString();
        }

        private void toolStripButton1_Click(object sender, EventArgs e)
        {
            Process.Start("notepad");
        }

        private void toolStripButton2_Click(object sender, EventArgs e)
        {
            Process.Start("calc");
        }

        private void button1_Click(object sender, EventArgs e)
        {
            pictureBox1.Image = Image.FromFile("c:\\Imagens\\tanqueVazio.jpg");
            pictureBox1.Tag = "Vazio";
            if(pictureBox1.Tag.ToString() == "Vazio")
            {
                pictureBox1.Image = Image.FromFile("c:\\Imagens\\tanqueMeioCheio.jpg");
                pictureBox1.Tag = "MeioCheio";
            }
            else if(pictureBox1.Tag.ToString() == "MeioCheio")
            {
                pictureBox1.Image = Image.FromFile("c:\\Imagens\\tanqueCheio.jpg");
                pictureBox1.Tag = "Cheio";
            }
        }

        private void pictureBox2_Click(object sender, EventArgs e)
        {

        }
    }
}
